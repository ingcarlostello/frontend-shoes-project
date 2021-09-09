import React, { useEffect } from 'react';

// @React-Redux
import { useDispatch, useSelector } from 'react-redux';

// @Actions
import { fetchWomenShoes } from '../../actions/womenShoes';

// @Components
import Card from '../Card/Card';

const WomenSection = () => {

  const dispatch = useDispatch();

  const {womenShoes} = useSelector(state => state.womenShoes)
  


  useEffect(() => {
    dispatch(fetchWomenShoes());
  }, [dispatch]);

  return (
    <div>
      <div className="grid sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4 my-8">
        {womenShoes.map((data) => (
          <div className="flex justify-center">
            <Card
              precio={data.Precio}
              puntaje={data.Puntaje}
              nombreModelo={data.Nombre_Modelo}
              // foto={data.Foto.formats.medium.url}
              foto={data.Foto.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WomenSection;