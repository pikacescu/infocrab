//<canvas id="myCanvas" width="300" height="150"></canvas>

"use strict";



var vertexShaderSource = `#version 300 es
in vec3 a_position;
in vec4 a_color;
out vec4 v_color;
void main() {
  gl_Position = vec4(a_position, 1.0);
  v_color = a_color;
}
`;

var fragmentShaderSource = `#version 300 es
precision highp float;
in vec4 v_color;
out vec4 outColor;
void main() {
  outColor = v_color;
}
`;

function createShader(gl, type, source) {
  var shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  var success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
  if (success) {
    return shader;
  }

  console.log(gl.getShaderInfoLog(shader));  // eslint-disable-line
  gl.deleteShader(shader);
  return undefined;
}

function createProgram(gl, vertexShader, fragmentShader) {
  var program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  var success = gl.getProgramParameter(program, gl.LINK_STATUS);
  if (success) {
    return program;
  }

  console.log(gl.getProgramInfoLog(program));  // eslint-disable-line
  gl.deleteProgram(program);
  return undefined;
}

function main() {
  // Get A WebGL context
  var canvas = document.getElementById("firstWEBgl");
  var gl = canvas.getContext("webgl2");
  if (!gl) {
    return;
  }

  // create GLSL shaders, upload the GLSL source, compile the shaders
  var vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
  var fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

  // Link the two shaders into a program
  var program = createProgram(gl, vertexShader, fragmentShader);

  // look up where the vertex data needs to go.

  // Create a buffer and put three 2d clip space points in it
  var positions = [
    -0.5, 0.0, 0.0,
    0.0, 0.5, -1.2,
    0.5, 0.0, 0.0,

    -0.5, 0.3, -0.0,
    0.5, 0.3, -0.0,
    0.0, -0.2, -0.2,

    -0.5, 1.0, 0.0,
    0.0, 0.5, 0.0,
    0.5, 1.0, 0.0,

    -0.5, 0.5, 0.0,
    0.0, 1.0, 0.0,
    0.5, 0.5, -0.7,
  ];



  // var colors = [
  //   1.0, 0.0, 0.0, 1.0,  // vertex 0: red
  //   0.0, 1.0, 0.0, 1.0,  // vertex 1: green
  //   0.0, 0.0, 1.0, 1.0,  // vertex 2: blue
  // ];
  var colors = [
    0.0, 0.0, 1.0, 1.0,  // vertex 1: green
    0.0, 0.0, 1.0, 1.0,  // vertex 1: green
    0.0, 0.0, 1.0, 1.0,  // vertex 1: green

    0.9, 0.1, 0.1, 1.0,
    0.9, 0.1, 0.1, 1.0,
    0.9, 0.1, 0.1, 1.0,

    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,
    0.1, 0.1, 0.1, 1.0,

    -0.5, 1.0, 0.0,
    0.0, 0.5, 0.0,
    0.5, 1.0, -0.0,
  ];

  gl.useProgram(program);
  var positionAttributeLocation = gl.getAttribLocation(program, "a_position");
  var colorAttributeLocation = gl.getAttribLocation(program, "a_color");

  var vao = gl.createVertexArray();
  gl.bindVertexArray(vao);

  var positionBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
  gl.vertexAttribPointer(positionAttributeLocation, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionAttributeLocation);

  var colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);
  gl.vertexAttribPointer(colorAttributeLocation, 4, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(colorAttributeLocation);


  gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

  gl.clearColor(0, 0.5, 0, 0);
  // Prepar render context
  gl.enable(gl.DEPTH_TEST);
  gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
  //gl.clear(gl.COLOR_BUFFER_BIT ); //| gl.DEPTH_BUFFER_BIT);

  // TRender logic here
  gl.useProgram(program);
  gl.bindVertexArray(vao);
  gl.drawArrays(gl.TRIANGLES, 0, 12); //9 vertices satarting from 0
}

main();
