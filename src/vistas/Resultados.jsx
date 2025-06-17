import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import supabase from '../supabaseClient';
import Grow from '@mui/material/Grow';
import Box from '@mui/material/Box';

const TAGS_VALIDOS = [
  "Decoración",
  "Comics",
  "Videojuegos",
  "Componentes PC",
  "Consolas",
  "Merchandising",
  "Cuentas",
  "Periféricos",
  "Ropa",
  "Juegos de mesa",
];

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Resultados() {
  const query = useQuery();
  const tag = query.get('tag');
  const busqueda = query.get('busqueda');

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchByTag = async () => {
      if (!tag) return;

      const normalizado = TAGS_VALIDOS.find(
        t => t.toLowerCase() === tag.toLowerCase()
      );

      if (!normalizado) {
        console.warn('Tag no válido:', tag);
        setProductos([]);
        return;
      }

      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .contains('tags', [normalizado])
        .or('vendido.is.null,vendido.eq.false');

      if (error) {
        console.error('Error al cargar productos:', error);
        setProductos([]);
      } else {
        setProductos(data);
      }
    };

    const fetchByBusqueda = async () => {
      if (!busqueda) return;

      const { data, error } = await supabase
        .from('productos')
        .select('*')
        .ilike('nombre', `%${busqueda}%`)
        .or('vendido.is.null,vendido.eq.false'); 

      if (error) {
        console.error('Error al cargar productos:', error);
        setProductos([]);
      } else {
        setProductos(data);
      }
    };

    if (tag) {
      fetchByTag();
    } else if (busqueda) {
      fetchByBusqueda();
    } else {
      setProductos([]);
    }
  }, [tag, busqueda]);

  return (
    <main className="container my-5">
      <h1 className="text-center mb-4 text-uppercase fw-bold sectionText">
        Resultados para: <span className="text-primary">{tag || busqueda}</span>
      </h1>

      {productos.length === 0 ? (
        <p className="text-center">No se encontraron productos con esta búsqueda.</p>
      ) : (
        <Box>
          <div className="row g-4">
            {productos.map((item, index) => (
              <Grow key={item.id} in={true} timeout={1000 + index * 300}>
                <div className="col-12 col-sm-6 col-md-3">
                  <Link to={`/Producto/${item.id}`} className="text-decoration-none">
                    <div className="card shadow-sm border-0 h-100">
                      <img
                        src={item.imagen_url || "/gameboy.jpg"}
                        className="card-img-top rounded-top"
                        alt={`Producto ${item.id}`}
                        style={{ height: '200px', objectFit: 'cover' }}
                      />
                      <div className="card-body text-center d-flex flex-column justify-content-between">
                        <div>
                          <h5 className="card-title fw-bold text-dark">{item.nombre || 'Producto'}</h5>
                          <h3 className="fw-bold">{item.precio}€</h3>
                          <p className="card-text text-muted">{item.descripcion || 'Descripción del producto'}</p>
                        </div>
                        {/* Tags clicables */}
                        <div className="mt-2">
                          {item.tags?.map((t) => (
                            <Link
                              key={t}
                              to={`/Resultados?tag=${encodeURIComponent(t)}`}
                              className="badge bg-secondary me-1 text-decoration-none"
                            >
                              {t}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Grow>
            ))}
          </div>
        </Box>
      )}
    </main>
  );
}
