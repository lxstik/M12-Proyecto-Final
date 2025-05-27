import React from "react";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';

export default function Comentario() {
    const [value, setValue] = React.useState(1);
    const [valoracionVendedor, setvaloracionVendedor] = React.useState(4);
    return (
        <main className="container my-5">
            <section className="row justify-content-center align-items-center mb-5 g-4">
                <div className="col-12 col-md-4 text-center">
                    <img
                        src="../public/icons/cuenta.png"
                        alt="Foto de perfil"
                        className="mb-3"
                        style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                    <div>
                        <Link to="/PerfilVendedor" className="text-decoration-none">
                            <h4 className="mb-1">Nombre Vendedor</h4>
                        </Link>
                        <Rating name="read-only" value={valoracionVendedor} readOnly />
                        
                    </div>
                </div>


                <div className="col-12 col-md-6 text-center">
                    <h4 className="mb-4">Producto Comprado</h4>
                    <div className="card shadow-sm mx-auto" style={{ maxWidth: '300px' }}>
                        <img
                            src="../public/gameboy.jpg"
                            className="card-img-top"
                            alt="Producto comprado"
                        />
                        <div className="card-body">
                            <h5 className="card-title">Producto</h5>
                            <h4 className="text-primary">99.99€</h4>
                            <p className="card-text">Descripción del producto</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Comentario y valoración */}
            <section className="text-center">
                <h2 className="mb-4">Deja tu comentario</h2>
                <div className="mb-3">
                    <textarea
                        className="form-control mx-auto"
                        style={{ maxWidth: '600px' }}
                        rows="5"
                        placeholder="Escribe tu comentario aquí..."
                    ></textarea>
                </div>

                <div className="mb-4">
                    <h4 className="mb-2">Valoración</h4>
                    <Box sx={{ '& > legend': { mt: 1 } }}>
                        <Rating
                            name="simple-controlled"
                            value={value}
                            onChange={(event, newValue) => {
                                setValue(newValue);
                            }}
                        />
                    </Box>
                </div>

                <Link to="/Home">
                    <button className="btn btn-success px-4 py-2">Enviar Comentario</button>
                </Link>
            </section>
        </main>
    );
}