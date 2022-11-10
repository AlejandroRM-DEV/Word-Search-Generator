# WordSearch Generator
## Usage
Pass a string array and an N number for the matrix dimension.
```js
const words = ["HOLA", "AMIGO", "PROGRAMADOR", "BIENVENIDO", "PRUEBA", "PALABRA", "ALEATORIA"];
const { grid, solution } = wsg(words, 25);
```
## Example 
Solution
```
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ A _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ B _ _ _ _ _ _ _ _ _
O _ _ _ _ _ _ _ _ _ _ _ _ _ E _ _ _ _ _ _ _ _ _ _
D _ _ _ _ _ _ _ _ _ _ _ _ U _ _ _ _ _ _ _ _ _ _ _
I _ _ _ _ _ _ _ _ _ _ _ R _ _ _ _ _ _ _ _ _ _ _ _
N _ _ _ _ _ _ _ _ _ _ P _ _ _ _ _ _ _ _ _ _ _ _ _
E _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
V _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
N _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
E _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
I _ _ R _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
B _ _ O _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ D _ _ _ _ _ _ _ _ _ _ A R B A L A P _ _ _ _
_ _ _ A _ _ _ _ _ A _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ M _ _ _ _ L _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ A _ _ _ E _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ R _ _ A _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ G _ T _ _ _ _ H _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ O O _ _ _ _ O _ _ _ _ _ _ _ _ _ _ _ _ _ _ _
_ _ _ R _ _ _ _ L _ _ _ O _ _ _ _ _ _ _ _ _ _ _ _
_ _ I P _ _ _ A _ _ _ _ _ G _ _ _ _ _ _ _ _ _ _ _
_ A _ _ _ _ _ _ _ _ _ _ _ _ I _ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ M _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ A _ _ _ _ _ _ _ _
```
Grid
```
Q U J P U M L C I M X S H Y B O X W O G A V V H M
C L E T O K X X X Y Y X N N P G A J P U W I L F M
U F W B S R Y Q K Z H P U Y H B J I G L A Q K F N
O D A Y E K N E C W C T V J E G T T F R N L Q U J
D D H W Q V T L U C F U M U H M R L D D R A E Y U
I V C H U H C R F A P P R Y O L H V V S R B C H H
N G Q Q F O Q T I W H P T K Y U Z K B R M M Z W L
E D U Z A V Z V C F G F S T R R Z L W Q J K K S U
V M G U U I V X N E D A U D R K Q Y X J S C K T U
N N O E K V U J Q S S P M H S Y F X Z E I Q C H M
E N C R I G A J Z W S D L Z L T G U V F N Z S H C
I R Q R H N N V Y Y W H U X R N K R I R X T V S C
B D A O K Q Z Q E S W G O Q P I B I Y V W A F Z G
Z E A D R J K Z S S Q B V Q A R B A L A P Q D K X
T U S A B X C I A A D N I O I B S A K P B H H H H
Q T A M E M M F L U X D L M D J M J Q K K O C L K
Q M T A S T W E J J I Z F F T N L Y L O T J A I B
N N J R C O A C Z M I U W D L U L X E K R O S K O
V H W G O T M L N W H L Q K S B L M X V K N N H A
E E C O O O X Z J O M I D T S A N T S A F N M F N
P Q A R N I R H L K T A O A S H T U Y D N P X H Z
C L I P D I V A A F N G F G R M Y Y L P W K N M K
E A T O A C I S O B N C Q O I M L Q B Z C Z M E Y
X X N T I H W K C J A N G S Z M H G N T J E F B V
Y I D H Q D E H F F P M C B U A A A Z X N X Z Q Y
```