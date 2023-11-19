import './ItemDetail.css'
import ItemCount from '../ItemCount.js/ItemCount'

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2 className='mt-4'>Nombre: {nombre}</h2>
            <h3>Precio: {precio}</h3>
            <h3>ID: {id}</h3>
            <p>
                <div className='m-4 d-flex align-items-center row'>
                    <p className='px-5 m-0 d-flex align-items-center'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptate necessitatibus vitae? Error perferendis soluta, ipsa incidunt quaerat, ea sunt laboriosam eligendi reprehenderit possimus repudiandae earum ratione ullam aliquam nostrum.
                    </p>
                </div>
                <h5>Entre sus características, podemos destacar:</h5>

                <br />
                <div className='bullets_container row'>
                    <div class="col-xxl-3 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia aliquam labore facere, culpa officiis asperiores, praesentium saepe ad deserunt, reiciendis a. Sint obcaecati accusamus dicta ut voluptates repudiandae ipsum! Nemo.
                    <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-1 col-sm-1 col-1"></div>
                </div> 
            </p>
            <img className='img__itemDetail' src={img} alt={nombre} />
            <ItemCount stock={10} inicial={1}/>
        </div>
    )
}

export default ItemDetail