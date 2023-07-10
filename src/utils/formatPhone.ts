export function formatarTelefone(telefone: string) {
    telefone = telefone.replace(/\D/g, "") // Remove todos os caracteres não numéricos
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2") // Adiciona parênteses e espaço após os primeiros 2 dígitos
    telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2") // Adiciona hífen após os últimos 4 dígitos
    return telefone
}