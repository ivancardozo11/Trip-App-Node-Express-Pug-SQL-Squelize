import { Viaje } from "../models/Viaje.js";
import { Testimonial } from '../models/Testimoniales.js'

const paginaInicio = async (req, res) =>{

    try { 
        const viajes = await Viaje.findAll({ limit: 4 });       
        res.render('inicio',{
            pagina:'Inicio',
            clase: 'home',
            viajes
        });
    } catch (error) {
        console.log(error);
    }
}

const paginaNosotros = (req, res)=>{
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
 }

 const paginaViajes = async (req, res)=>{

    const viajes = await Viaje.findAll();
    
    res.render('viajes', {
        pagina: 'Proximos viajes',
        viajes,
    });
 }

 const paginaTestimoniales = async (req, res)=>{


   try {
    const testimoniales = await Testimonial.findAll();

    res.render('testimoniales', {
        pagina: 'Testimoniales',
        testimoniales
    });
   } catch (error) {
    console.log(error);
   }
}
const paginaDetalleViaje =async  (req, res) =>{
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({ where : { slug }});

        res.render('viaje', {
            pagina: 'Informacion Viaje',
            viaje
        })
        
    } catch (error) {
        console.log(error);
    }
}


export{
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}
