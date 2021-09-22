import React from 'react';
import zapato from "../../assets/zapato.jpg"

const ProductDetail = () => {
    return (
      <>
        <div className="grid grid-cols-2">
          <div className="bg-green-400">
            <div className="p-20">
              <img src={zapato} alt="zapato" className="" />
            </div>
          </div>

          <div className="bg-red-400">
            <div className="p-20">
              <div>
                <h1 className="text-5xl font-bold">Zapato Belen</h1>
                <p className="text-3xl mt-4">$ 90.000</p>
                <div className="mt-4">4 estrellas</div>
                <p className="mt-8">
                  Many desktop publishing packages and web page editors now use
                  Lorem Ipsum as their default model text, and a search for
                  'lorem ipsum' will uncover many web sites still in their
                  infancy. Various versions have evolved over the years,
                  sometimes by accident, sometimes on purpose (injected humour
                  and the like).
                </p>
                <div className="mt-4">
                    <h1>Talla</h1>
                    <select className="p-2">
                        <option value="36">36</option>
                        <option value="37">37</option>
                        <option selected value="38">38</option>
                        <option value="39">39</option>
                    </select>
                    <input className="p-2 ml-4 " type="number" name="amount" id="catidadZapatos" placeholder="cantidad"/>
                    <div class="flex-auto flex space-x-3 mt-4">
                        <button class="w-1/2 p-2 flex items-center justify-center rounded-md bg-black text-white" type="submit">Agregar al carrito</button>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default ProductDetail;