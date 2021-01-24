// 本题为考试单行多行输入输出规范示例，无需提交，不计分。
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input = "";
var input_array = "";

process.stdin.on('data', function (data) {
    input += data;
});

process.stdin.on('end', function () {
        input = input.slice(0, input.lastIndexOf("\n"));
        input_array = input.split(",");

        // console.log(input_array);
        for (let i = 0; i < input_array.length; i++) {
            input_array[i] = +input_array[i];
        }
        var input_array = [...new Set(input_array)].sort((a, b) => a - b);
        let str = input_array[0] + '';
        for (let i = 0; i < input_array.length; i++) {
            if (input_array[i + 1] - input_array[i] == 1) {
                str += "," + input_array[i + 1] + "";
            } else {
                console.log(str);
                str = input_array[i + 1];
            }
        }
        // 2,10,3,4,5,7,11,10,11,20
        // console.log(str);
    }
);
