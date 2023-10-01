import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Delete from '../../img/delete.png';
import Add from '../../img/add.png';

function Card1() {
    const [tasks, setTasks] = useState([
        // 'tasks' bu değişken to-do listesindeki görevlerin bir dizisini temsil ediyor.
        // Örnek görevlerle başlatılıyor, 'Proje Planlaması' görevleri bu dizide bulunuyor.
        // 'setTasks' : 'tasks' durum değişkenine yeni bir değer atamak için kullanılır. 
        // 'setTasks' React'ta bir durum değişkenini güncellemek için kullanılan bir işlevdir. 
        // 'useState' kullanarak gerekli durum değişkenlerini tanımlıyoruz.
        'Proje Planlaması',
        'Toplantı Başlatma',
    ]);


    const [newTask, setNewTask] = useState('');
    // 'newTask' to-do listemizi temsil eden görevlerin bir dizisini içeriyor.
    // 'setNewTask' : 'newTask' değişkenini güncellemek için kullanılacak.


    const [isAddingTask, setIsAddingTask] = useState(false);
    /* 
    'isAddingTask' yeni görev eklemek için metin giriş kutusunu görüntülemek 
    veya gizlemek için kullandık.
    Başlangıçta yeni görev eklemek için kullanılan metin giriş kutusu gizli
    olduğu için bu değer 'false' olarak başlatılır.
    */

    function toggleAddTask() {
        setIsAddingTask(!isAddingTask);
    }
    /* 'toogleAddTask' işlevi, 'isAddingTask' durum değişkenini tersine çevirerek
    yeni görev eklemek için metin kutusunun görünürlüğünü değiştiriyor.
    Eğer metin giriş kutusu görünürse, işlev çağrıldığında gizlenir.
    Eğer metin giriş kutusu gizliyse, işlev çağrıldığında görünür hale gelir.
    */


    function handleNewTaskChange(event) {
        setNewTask(event.target.value);
    }
    /*
    'handleNewTaskChange' işlevini, yeni görevin metin giriş kutusuna yazıldığında 
    bu metni 'newTask' adlı durum değişkenine kaydetmek için kullanıyoruz.
    'handleNewTaskChange' işlevi bir parametre olarak 'event' nesnesini alır.
    'event' nesnesi, metin giriş kutusunda bir değişiklik olduğunda çağrılam
    bir olay işleyicisidir.
    'event.target.value)' ifadesi kullanılarak metin giriş kutusuna girilen
    değer alınır ve bu değer 'newTask' değişkenine atanır.
    */

    function addTask() {
        if (newTask) {
            setTasks([...tasks, newTask]);
            setNewTask('');
            setIsAddingTask(false);
        }
    }
    /* 'addTask' işlevi, kullanıcının girdiği yeni görevi 'tasks' dizisine ekler
    ve ardından metin giriş kutusunu temizler.

    'if (newTask)' : 'newTask' adlı durum değişkeninin boş olup olmadığını kontrol eder.
    Eğer 'newTask' boş değilse, işlev devam eder ve mevcut 'tasks' dizisini kopyalar
    ve yeni görevi bu kopyanın sonuna ekler. Mevcut görevlerin üzerine yeni görevi
    eklemek yerine, mevcut görevleri değiştirmeksizin yeni görevi ekler. 'setTasks([...tasks, newTask])'
    'setNewTask('')' kullanılarak 'newTask' durum değişkeni sıfırlanır. Kullanıcı
    yeni bir görev ekledikten sonra metin giriş kutusunun temizlenmesi sağlanır.
    'setIsAddingTask(false)' ile 'isAddingTask' durum değişkeni 'false' olarak
    ayarlanır ve kullanıcının yeni görev eklemek için kullanılan metin giriş kutusunun
    gizlenmesi sağlanır.
    */

    function deleteTask(index) {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    }

    // 'deleteTask' işlevi, belirli bir görevi 'tasks' dizisinden kaldırır.
    /* 
    'deleteTask' işlevi parametre olarak 'index' adlı değeri alır.
    'index' silinmesi gereken görevin dizideki konumu temsil eder.
    'const updatedTasks = [...tasks]' mevcut 'tasks' dizisinin bir kopyasını oluşturur.
    'updatedTasks.splice(index, 1)' kullanılarak 'updatedTasks' dizisinden belirtilen 'index'
    konumundaki görev silinir. 
    'splice' işlevi, dizi içideki belirli bir konumdan itibaren belirli sayıda 
    ögeyi kaldırmak için kullanılır.
    'setTasks(updatedTasks)' kullanılarak 'tasks' durum değişkeni güncellenir. 
    */


    return (
        <Card className='cards cards-style' style={{ width: '18rem' }}>
            <Card.Body>
                <span className='title-style'>Yapılacaklar</span>
                <ListGroup className='listgroup' variant="">
                    {tasks.map((task, index) => (
                        <ListGroup.Item className='task' key={index}>
                            {task}
                            <Button
                                className='button'
                                variant="outline-warning"
                                onClick={() => {
                                    deleteTask(index);
                                }}
                            >
                                <img className='delete' src={Delete} alt="" />
                            </Button>{' '}
                        </ListGroup.Item>
                    ))}
                    {isAddingTask ? (
                        <ListGroup.Item className='task'>
                            <input
                                className='newtask'
                                type='text'
                                placeholder='Yeni görevi girin'
                                value={newTask}
                                onChange={handleNewTaskChange}
                            />
                            <Button
                                className='addbutton'
                                variant='outline-warning'
                                onClick={addTask}
                            >
                                <img src={Add} alt="" />
                            </Button>{' '}
                        </ListGroup.Item>
                    ) : (
                        <ListGroup.Item className='task'>
                            <span className='addtask' onClick={toggleAddTask}>
                                Yeni görev ekle
                            </span>
                            <img className='add' src={Add} alt="" onClick={toggleAddTask} />
                        </ListGroup.Item>
                    )}
                </ListGroup>
            </Card.Body>
        </Card>
    );
}

export default Card1;
