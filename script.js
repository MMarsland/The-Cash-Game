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
        var next_x_location = screenX / 2;
        var next_y_location = screenY / 2;
        //var integers = getRandomIntegers();
        for (var i=0;i<this.numberOfDots;i++)
        {    
            if (this.nodes.length == 0)
            {
                this.nodes[i] = new Node(null, null, [next_x_location, next_y_location]);
            }
            this.nodes[i] = this.nodes[i-1].getNextNode();
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
        this.value = value;
        this.connections = connections;
        this.location = location;
        if (location != null)
        {
            this.x = location[0];
            this.y = location[1];
        }
    }

    getNextNode()
    {
        var newNode = new Node();
        var direction = Math.floor(Math.random() * 8);
        switch (direction)
        {
            case 0:
                newNode.x = this.x;
                newNode.y = this.y - 200;
                break;
            case 1:
                newNode.x = this.x + 200;
                newNode.y = this.y - 200;
                break;
            case 2:
                newNode.x = this.x +  200;
                newNode.y = this.y;
                break;
            case 3:
                newNode.x = this.x + 200;
                newNode.y = this.y + 200;
                break;
            case 4:
                newNode.x = this.x;
                newNode.y = this.y + 200;
                break;
            case 5:
                newNode.x = this.x - 200;
                newNode.y = this.y + 200;
                break;
            case 6:
                newNode.x = this.x - 200;
                newNode.y = this.y;
                break;
            case 7:
                newNode.x = this.x - 200;
                newNode.y = this.y - 200;
                break;
        }
        while (true)
        {
            for (node in app.game.nodes)
            {
                
            }
        }
            
    }
}