import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Viaje = db.define('viajes', {
    titulo: Sequelize.STRING,
    
    precio: Sequelize.STRING,
    
    fecha_ida: Sequelize.DATE,
    
    fecha_vuelta: Sequelize.DATE,
    
    imagen: Sequelize.STRING,
    
    descripcion: Sequelize.STRING,
    
    disponibles:Sequelize.STRING,
    
    slug: Sequelize.STRING
    
},{
    timestamps: false
});