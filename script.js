var app;
var node1;
var node2;
var node3;
var node4;
var node5;
var node6;
var node7;
var node8;
var node9;
var node10;
var node11;
var moves = 0;
var nodes;

function startApp()
{
    //app = new App();
    //app.loadMenuScreen();
    launchExampleGame();
}

/*function startGameFromMenu()
{
    app.game.startGame(document.getElementById("number-of-dots-selector").value, document.getElementById("difficulty-selector").value);
    app.loadGameScreen();   
}*/

function launchExampleGame()
{
    var wrapper = document.getElementById("wrapper");
    wrapper.removeChild(wrapper.lastChild);

    document.getElementById("example-game-screen").style.display = "block";
    node1 = new Node(4, [5, 9], 1);
    node2 = new Node(-2, [6, 7], 2);
    node3 = new Node(2, [4, 5], 3);
    node4 = new Node(8, [3, 6], 4);
    node5 = new Node(1, [1, 3, 7], 5);
    node6 = new Node(1, [2, 4, 8], 6);
    node7 = new Node(3, [2, 5, 10], 7);
    node8 = new Node(4, [6, 11], 8);
    node9 = new Node(5, [1, 11], 9);
    node10 = new Node(2, [7, 11], 10);
    node11 = new Node(3, [8, 9, 10], 11);

    nodes = [node1,node2,node3,node4,node5,node6,node7,node8,node9,node10,node11];
    for (var nodeIndex in nodes){ node = nodes[nodeIndex];
        node.connectNodes();
        node.presentValue();
    }
}
function checkVictory()
{
    var victory = true;
    for (var nodeIndex in nodes){ node = nodes[nodeIndex];
        if (node.value < 0){
            victory = false;
        }
    }

    if (victory)
    {
        var wrapper = this.document.getElementById("wrapper");
        wrapper.removeChild(this.document.getElementById("example-game-screen"));
        wrapper.innerHTML += ''
        +'<div id="victory-screen">'
        +'  <div id="victory-text">'
        +'      You achieved victory in <strong id="victory-text-p">'+moves+'</strong> moves! Congratulations!'
        +'  </div>'
        +'</div>';
    }
}

function give1()
{
    node1.give();
}
function give2()
{
    node2.give();
}
function give3()
{
    node3.give();
}
function give4()
{
    node4.give();
}
function give5()
{
    node5.give();
}
function give6()
{
    node6.give();
}
function give7()
{
    node7.give();
}
function give8()
{
    node8.give();
}
function give9()
{
    node9.give();
}
function give10()
{
    node10.give();
}
function give11()
{
    node11.give();
}
function take1()
{
    node1.take();
}
function take2()
{
    node2.take();
}
function take3()
{
    node3.take();
}
function take4()
{   
    node4.take();
}
function take5()
{
    node5.take();
}
function take6()
{
    node6.take();
}
function take7()
{
    node7.take();
}
function take8()
{
    node8.take();
}
function take9()
{
    node9.take();
}
function take10()
{
    node10.take();
}
function take11()
{
    node11.take();
}


class Node
{
    constructor(value, connections, id)
    {
        this.value = value;
        this.connectionNums = connections;
        this.connectedNodes = [];
        this.id = id
    }

    connectNodes()
    {
        while(this.connectionNums.length != 0)
        {
            switch (this.connectionNums[0])
            {
                case 1:
                    this.connectedNodes.push(node1);
                    break;
                case 2:
                    this.connectedNodes.push(node2);
                    break;
                case 3:
                    this.connectedNodes.push(node3);
                    break;
                case 4:
                    this.connectedNodes.push(node4);
                    break;
                case 5:
                    this.connectedNodes.push(node5);
                    break;
                case 6:
                    this.connectedNodes.push(node6);
                    break;
                case 7:
                    this.connectedNodes.push(node7);
                    break;
                case 8:
                    this.connectedNodes.push(node8);
                    break;
                case 9:
                    this.connectedNodes.push(node9);
                    break;
                case 10:
                    this.connectedNodes.push(node10);
                    break;
                case 11:
                    this.connectedNodes.push(node11);
                    break;
            }
            this.connectionNums.shift();
        }
    }

    give()
    {
        moves++;
        for (var connectionIndex in this.connectedNodes){ var connectedNode = this.connectedNodes[connectionIndex];
            connectedNode.increaseValue();
            this.decreaseValue();
        }
        checkVictory();
    }

    take()
    {
        moves++;
        for (var connectionIndex in this.connectedNodes){ var connectedNode = this.connectedNodes[connectionIndex];
            connectedNode.decreaseValue();
            this.increaseValue();
        }
        checkVictory();
    }

    presentValue()
    {
        switch (this.id)
        {
            case 1:
                document.getElementById("1").innerText = this.value;
                break;
            case 2:
                document.getElementById("2").innerText = this.value;
                break;
            case 3:
                document.getElementById("3").innerText = this.value;
                break;
            case 4:
                document.getElementById("4").innerText = this.value;
                break;
            case 5:
                document.getElementById("5").innerText = this.value;
                break;
            case 6:
                document.getElementById("6").innerText = this.value;
                break;
            case 7:
                document.getElementById("7").innerText = this.value;
                break;
            case 8:
                document.getElementById("8").innerText = this.value;
                break;
            case 9:
                document.getElementById("9").innerText = this.value;
                break;
            case 10:
                document.getElementById("10").innerText = this.value;
                break;
            case 11:
                document.getElementById("11").innerText = this.value;
                break;
        }
    }

    increaseValue()
    {
        this.value++;
        this.presentValue();
    }
    decreaseValue()
    {
        this.value--;
        this.presentValue();
    }
}































/*
class App
{
    constructor()
    {
        this.game = new Game();
    }

    loadMenuScreen()
    {       
        wrapper.innerHTML += ''
        +'<div id="menu-screen">'
        +'  <div id="title">'
        +'      <div id="title-top">The</div>'
        +'      <div id="title-bottom">Cash Game</div> '
        +'  </div>'
        +'  <button id="start-button" onclick="startGameFromMenu()">Start Game</button>'
        +'  <div id="number-of-dots-selector-box">'
        +'      Number of Dots:</br>'
        +'      <input id="number-of-dots-selector" type="number" name="num_of_dots" min="2" max="10" value="2">'
        +'  </div>'
        +'  <div id="difficulty-selector-box">'
        +'      Difficulty:</br>'
        +'      <select id="difficulty-selector">'
        +'         <option value="easy">Easy</option>'
        +'         <option value="medium">Medium</option>'
        +'         <option value="hard">Hard</option>'
        +'         <option value="impossible">Probably Impossible</option>'
        +'      </select>'
        +'  </div>'
        +'  <button id="example-button" onclick="launchExampleGame()">Play Example Game</button>'
        +'</div>';
    }

    loadGameScreen()
    {
        wrapper.innerHTML = ''
        +'<div id="game-screen">'
        +'</div>';
        this.game.prepareTree();
    }

    addNodeToScreen(node)
    {
        var gameScreen = document.getElementById("game-screen");
        gameScreen.innerHTML += '<div class="node" style="left: '+node.x+'px; top: '+node.y+'px"></div>';
        for (var connectionIndex in node.connections)
        {
            var connection = node.connections[connectionIndex];
            gameScreen.innerHTML += ''
                +'<svg height="900" width="900">'
                +'<polyline points="'+node.x+','+node.y+' '+connection.x+','+connection.y+'" style="fill:none;stroke:black;stroke-width:6"></polyline>'
                +'</svg>';
        }
    }
}

class Game
{
    constructor(numberOfDots, difficulty)
    {
        this.numberOfDots = numberOfDots;
        this.difficulty = difficulty;
        this.nodes =[];
    }

    startGame(num_of_dots, difficulty)
    {
        this.numberOfDots = num_of_dots;
        this.difficulty = difficulty;
        console.log("Starting The Cash Game on "+difficulty+" with "+num_of_dots+" dots!");  
    }

    prepareTree()
    {
        //var integers = getRandomIntegers();
        for (var i=0;i<this.numberOfDots;i++)
        {    
            if (i == 0)
            {
                this.nodes[i] = new Node().getNextNode(true);
            }
            else
            {
                this.nodes[i] = this.nodes[i-1].getNextNode();
            }
        }
    }

    getRandomIntegers()
    {
        var integers = [];
        for (var i=0;i<this.numberOfDots;i++)
        {
            integers[i] = Math.floor(Math.random() * 11) - 5;
        }
        switch (difficulty)
        {
            case "easy":
                if (this.valuesTotal(integers) == 10)
                    return integers;
                break;
            case "medium":
                    if (this.valuesTotal(integers) == 5)
                    return integers;
                break;
            case "hard":
                    if (this.valuesTotal(integers) == 0)
                    return integers;    
                break;
            case "impossible":
                    if (this.valuesTotal(integers) == -10)
                    return integers;    
                break;
        }
        return getRandomIntegers();
    }

    valuesTotal(integers)
    {
        var sum = 0;
        for (intIndex in integers)
        {
            sum += integers[intIndex];
        }
        return sum;
    }
}

class Node
{
    constructor(value, connections, location)
    {
        this.value = (value != null) ? value : 0;
        this.connections = (connections != null) ? connections : [];
        this.location = (location != null) ? location : [];
        if (location != null)
        {
            this.x = location[0];
            this.y = location[1];
        }
    }

    getNextNode(first)
    {
        var newNode;
        if (first)
        {
            newNode = new Node(null, null, [screen.width / 2 - 200, screen.height / 2]); 
        }
        else
        {
            newNode = new Node();
            var direction = Math.floor(Math.random() * 8);
            switch (direction)
            {
                case 0:
                    newNode.x = this.x;
                    newNode.y = this.y - 150;
                    break;
                case 1:
                    newNode.x = this.x + 150;
                    newNode.y = this.y - 150;
                    break;
                case 2:
                    newNode.x = this.x + 150;
                    newNode.y = this.y;
                    break;
                case 3:
                    newNode.x = this.x + 150;
                    newNode.y = this.y + 150;
                    break;
                case 4:
                    newNode.x = this.x;
                    newNode.y = this.y + 150;
                    break;
                case 5:
                    newNode.x = this.x - 150;
                    newNode.y = this.y + 150;
                    break;
                case 6:
                    newNode.x = this.x - 150;
                    newNode.y = this.y;
                    break;
                case 7:
                    newNode.x = this.x - 150;
                    newNode.y = this.y - 150;
                    break;
            }
            while (true)
            {
                for (var nodeIndex in app.game.nodes)
                {
                    var connected = Math.floor(Math.random() * 2);
                    if (connected == 0)
                    {
                        newNode.connections.push(app.game.nodes[nodeIndex]);
                        app.game.nodes[nodeIndex].connections.push(newNode)
                    }
                }
                
                if (newNode.connections != null && newNode.connections.length > 0)
                {
                    break;
                }
            }
        }   

        app.addNodeToScreen(newNode);
        return newNode;
    }
}*/