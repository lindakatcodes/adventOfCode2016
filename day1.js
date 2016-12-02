//Code ideas borrowed/initiated from reddit users u/LieutenantSwr2d2 and u/tuxitop; 
//thanks for debugging assistance u/bbatsell, u/msully4321, & u/mrbkap!

var moves = ['R2', 'L1', 'R2', 'R1', 'R1', 'L3', 'R3', 'L5', 'L5', 'L2', 'L1', 'R4', 'R1', 'R3', 'L5', 'L5', 'R3', 'L4', 'L4', 'R5', 'R4', 'R3', 'L1', 'L2', 'R5', 'R4', 'L2', 'R1', 'R4', 'R4', 'L2', 'L1', 'L1', 'R190', 'R3', 'L4', 'R52', 'R5', 'R3', 'L5', 'R3', 'R2', 'R1', 'L5', 'L5', 'L4', 'R2', 'L3', 'R3', 'L1', 'L3', 'R5', 'L3', 'L4', 'R3', 'R77', 'R3', 'L2', 'R189', 'R4', 'R2', 'L2', 'R2', 'L1', 'R5', 'R4', 'R4', 'R2', 'L2', 'L2', 'L5', 'L1', 'R1', 'R2', 'L3', 'L4', 'L5', 'R1', 'L1', 'L2', 'L2', 'R2', 'L3', 'R3', 'L4', 'L1', 'L5', 'L4', 'L4', 'R3', 'R5', 'L2', 'R4', 'R5', 'R3', 'L2', 'L2', 'L4', 'L2', 'R2', 'L5', 'L4', 'R3', 'R1', 'L2', 'R2', 'R4', 'L1', 'L4', 'L4', 'L2', 'R2', 'L4', 'L1', 'L1', 'R4', 'L1', 'L3', 'L2', 'L2', 'L5', 'R5', 'R2', 'R5', 'L1', 'L5', 'R2', 'R4', 'R4', 'L2', 'R5', 'L5', 'R5', 'R5', 'L4', 'R2', 'R1', 'R1', 'R3', 'L3', 'L3', 'L4', 'L3', 'L2', 'L2', 'L2', 'R2', 'L1', 'L3', 'R2', 'R5', 'R5', 'L4', 'R3', 'L3', 'L4', 'R2', 'L5', 'R5']; 

var x = 0, y = 0;
var direction = 0; //0 north, 1 east, 2 south, 3 west
var position = [x, y];
var spots = [];
var twice;
var foundTwice = false;

moves.forEach(function (instruction) {
    direction = (direction + (instruction[0] === 'R' ? 1 : -1) + 4) % 4;
    var n = parseInt(instruction.slice(1));
    switch (direction) {
        case 0:
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x, y + i];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            y += n;
            break;
        case 1:
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x + i, y];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            x += n;
            break;
        case 2:
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x, y - i];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            y -= n;
            break;
        case 3:
            if (foundTwice === false) {
                for (var i = 0; i < n; i++) {
                    position = [x - i, y];
                    if (spots.indexOf(position.toString()) === -1) {
                        spots.push(position.toString());
                    } else {
                        foundTwice = true;
                        twice = position;
                    }
                }
            }
            x -= n;
            break;
    }
})


console.log(Math.abs(x) + Math.abs(y));
console.log(twice);
console.log(Math.abs(twice[0] + Math.abs(twice[1])));
