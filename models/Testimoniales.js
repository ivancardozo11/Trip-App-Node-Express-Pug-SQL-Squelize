import Sequelize from 'sequelize';
import db from '../config/db.js';

export const Testimonial = db.define('testimoniales', {
    nombre: Sequelize.STRING,
    
    correo: Sequelize.STRING,
    
    mensaje: Sequelize.STRING,
},{
    timestamps: false
});