interface Nivel  {
    status: "active" | "inactive",
    vida: number;

    getAtualizarVida(): number;
    
}