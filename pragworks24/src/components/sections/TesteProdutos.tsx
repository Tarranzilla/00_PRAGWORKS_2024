// Vanilla React Imports
import { useEffect, useState, forwardRef, useRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, LayoutGroup } from "framer-motion";

import Produtos from "../../data/00B_TodosOsProdutos";

const TesteProdutos = forwardRef(function Section_Produtos(props, ref: any) {
    return (
        <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.0, type: "tween" }}
            className="LP_Section"
            id="ProdutosTeste"
            key={"ProdutosTeste_key"}
        >
            {Produtos.map((produto) => {
                return (
                    <div className="Produto_Container">
                        <div className="Produto_Container_Img">
                            <img src={produto.heroImg} alt={produto.name} />
                        </div>
                        <div className="Produto_Container_Text">
                            <h1>{produto.name}</h1>
                            <p>{produto.textIntro}</p>
                            {produto.relatedSectors.map((sector) => {
                                return (
                                    <div className="Produto_Container_Text_RelatedSectors">
                                        {sector.icon}
                                        <h2>{sector.title}</h2>
                                        <p>{sector.description}</p>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </m.div>
    );
});

export default TesteProdutos;
