## Relatório - Problema da Galeria de Arte
<b> Integrantes: </b> Antônio Caetano Neves Neto, Beatriz Reis Gama Barbosa, João Lucas Simões Moreira.

# Introdução
O objetivo do trabalho prático 1 foi construir um algoritmo que resolve o problema da galeria de arte para um dado polígono, cujo propósito é decidir o número de câmeras para vigiar uma área e o posicionamento necessário para elas. A solução empregada consistiu em desenvolver dois algoritmos distintos: o <b> algoritmo do corte de orelhas </b>, feito para triangular o polígono de entrada, e o <b> algoritmo da 3-coloração </b>, que foi construído sobre o grafo dual do polígono triangulado, feito para decidir onde posicionar cada câmera necessária, cujo número é <i> ⌊n/3⌋ </i>, onde n é o número de triângulos formados.
	
# Metodologia
Para esta seção, serão feitos tópicos que descrevem as implementações de cada um dos algoritmos citados na introdução.
<ol>
	<li>
		Corte de orelhas
	</li>
	O algoritmo do corte de orelhas é uma técnica descrita em sala de aula para realizar a triangulação de um polígono dado, ou seja, transformar um polígono convexo em uma composição de diferentes triângulos. Um exemplo de triangulação pode ser visto na imagem a seguir. <br> 
	<img src = "imgs/triangulacao.jfif"/>
	Para realizar essa técnica, foi necessário desenvolver algumas funções auxiliares:
	<ul>
		<li>Função <i>is_convex(a, b, c)</i>: necessária para determinar se o polígono formado pelos pontos a, b e c é convexo ou não; </li>
		<li>Função <i>is_in_triangle(a, b, c, p)</i>: necessária para determinar se havia algum ponto p dentro de um triângulo a, b, c formado;</li>
		<li>Função <i>is_clock_wise(polygon)</i>: verifica se os pontos do polígono estão em sentido horário;</li>
	</ul>
	<br>
	A função principal, chamada <i>get_unique_ear(polygon, n_frames)</i> recebe o polígono de entrada e um valor que representa o número de frames necessários para a animação, e retorna um dos triângulos presentes no polígono. Primeiro, se descobre o tamanho do polígono; caso ele possua menos de 3 pontos, não é possível realizar a triangulação. Se ele possuir somente 3 pontos, a triangulação é o próprio polígono. Caso possua mais, então é feita uma iteração sobre o polígono, pegando 3 pontos a cada vez. Em seguida, é avaliado se esses 3 pontos formam um polígono convexo, e se sim, é checada a existência de algum ponto dentro desse polígono. Caso ambas as condições forem válidas, então os três pontos são deletados e o polígono é salvo. <br>
	O processo de animação corre em um loop que chama sucessivamente a <i>get_unique_ear</i> até que não hajam mais opções. A cada iteração, é exibido o polígono inteiro e o triângulo que está sendo avaliado. Se ele for um triângulo válido, ele é adicionado ao polígono inteiro. O vídeo com esse processo pode ser visto abaixo.
	<img src = "imgs/triangulacao.gif"/>
	<br>
	<li>
		3-Coloração
	</li>
	teste
</ol>

# Análise dos Resultados

# Conclusão

# Bibliografias

