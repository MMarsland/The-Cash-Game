var app;

function startApp()
{
    app = new App();
    app.loadMenuScreen();
}

function startGameFromMenu()
{
    app.game.startGame(document.getElementById("number-of-dots-selector").value, document.getElementById("difficulty-selector").value);
    app.loadGameScreen();   
}

class App
{
    constructor()
    {
        this.game = new Game();
    }

    loadMenuScreen()
    {
        var wrapper = document.getElementById("wrapper");
        wrapper.removeChild(wrapper.firstChild);
        
        wrapper.innerHTML = ''
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
        +'</div>';
    }

    loadGameScreen()
    {
        var wrapper = document.getElementById("wrapper");
        wrapper.removeChild(wrapper.firstChild)

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
}