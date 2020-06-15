// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attributes){
    this.length = attributes.length;
    this.width = attributes.width;
    this.height = attributes.height; 
    };
    volume () {
    return  this.length * this.width * this.height;
    };
    surfaceArea () {
    return  2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    };
}
    // cuboid () {
    //     
        
    // }
    // }

    const cuboid = new CuboidMaker(length, width, height)
    // function cuboid(length, width, height) 
    {
        Person.call(length, width, height);
        length = 4;
        width = 5;
        height = 5;
        }

    // class cuboid extends CuboidMaker {
    //     constructor(item){
    //         super(item);
    //         length = 4;
    //         width = 5;
    //         height = 5;
    //     }
    // }
    //         item.length = 4,
    //         item.width = 5,
    //         item.height = 5,
    //     }  
    //     volume () {
    //         return volume = this.length * this.width * this.height;
    //         };
    //         surfaceArea () {
    //             return surfaceArea = 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height));
    //             };
    // }

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130


// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.