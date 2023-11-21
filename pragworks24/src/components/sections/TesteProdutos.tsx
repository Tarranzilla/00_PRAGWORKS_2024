// Vanilla React Imports
import { useEffect, useState, forwardRef, useRef } from "react";

//Framer Motion Imports
import { motion as m, AnimatePresence, LayoutGroup } from "framer-motion";

import Produtos from "../../data/00_TodosOsProdutos";

const TesteProdutos = forwardRef(function TesteProdutos(props, ref: any) {
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
                    <div className="Produto_Container" key={produto.name + "_container"}>
                        <div className="Produto_Container_Img" key={produto.name + "_img_container"}>
                            <img src={produto.heroImg} alt={produto.name} />
                        </div>
                        <div className="Produto_Container_Text" key={produto.name + "_Descricao_Container"}>
                            <div className="Produto_Header">
                                <h4 className="Produto_Prename">{produto.prename}</h4>
                                <h1 className="Produto_Name">{produto.name}</h1>
                            </div>

                            <p className="Produto_Text_Intro">{produto.textIntro}</p>
                            {produto.textDetail.map((paragraph, index) => {
                                return (
                                    <p className="Produto_Text_Detail_Paragraph" key={produto.name + "_paragrafo_" + index}>
                                        {paragraph}
                                    </p>
                                );
                            })}

                            {produto.relatedSectors.length > 0 && <h2 className="Product_Information_Title">Indicado para os Setores</h2>}
                            {produto.relatedSectors.map((sector, index) => {
                                return (
                                    <div className="Produto_Container_Text_RelatedSectors" key={"related_sector_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            {sector.icon}
                                            <h2 className="Produto_Container_Titulo">{sector.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{sector.description}</p>
                                    </div>
                                );
                            })}

                            {produto.useCases.length > 0 && <h2 className="Product_Information_Title">Aplicações</h2>}
                            {produto.useCases.map((useCase, index) => {
                                return (
                                    <div className="Produto_Container_Text_UseCases" key={"useCase_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            {useCase.icon}
                                            <h2 className="Produto_Container_Titulo">{useCase.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{useCase.description}</p>
                                    </div>
                                );
                            })}

                            {produto.capacities.length > 0 && <h2 className="Product_Information_Title">Capacidades</h2>}
                            {produto.capacities.map((capacity, index) => {
                                return (
                                    <div className="Produto_Container_Text_Capacities" key={"capacities_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            {capacity.icon}
                                            <h2 className="Produto_Container_Titulo">{capacity.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{capacity.description}</p>
                                    </div>
                                );
                            })}

                            {produto.specifications.length > 0 && <h2 className="Product_Information_Title">Especificações</h2>}
                            {produto.specifications.map((specification, index) => {
                                return (
                                    <div className="Produto_Container_Text_Specifications" key={"spec_" + index}>
                                        <div className="Produto_Container_Text_Header">
                                            {specification.icon}
                                            <h2 className="Produto_Container_Titulo">{specification.title}</h2>
                                        </div>
                                        <p className="Produto_Information_Description">{specification.description}</p>
                                    </div>
                                );
                            })}

                            <div className="Produto_Detalhe_Footer">
                                {produto.interactions.map((interaction, index) => {
                                    return (
                                        <div className="Produto_Container_Text_Interactions hoverable" key={"interaction_" + index}>
                                            {interaction.icon}
                                            <h2 className="Produto_Container_Interaction_Titulo">{interaction.title}</h2>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </m.div>
    );
});

export default TesteProdutos;
