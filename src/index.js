module.exports = function solveEquation(equation) {
  var solutions =[];
  var first = equation.indexOf('*');
  var second = equation.indexOf('*', first+1);
  var a = +equation.substring(0, first);
  var b = +equation.substring(first+8,second-1);
  if (  equation.substring(first+6, first+7) == '-'){
    b = -b;
  }
  var c = +equation.substring(second +5, equation.length);
  if (  equation.substring(second+4, second+5) == '-'){
    c = -c;
  }
  var descr = b*b -1*(4*a*c);
  if( descr > 0){
      var sol1 = (-1*b + Math.sqrt( descr )) / (2 * a);
      var sol2 = (-1*b - Math.sqrt( descr )) / (2 * a);
    solutions.push(Math.round(sol1));
    solutions.push(Math.round(sol2));
  }else if( descr == 0){
    var sol = -b / 2*a;
    solutions.push(sol);
  }else{
  }
  solutions.sort(function(a,b){
    return a-b;
  })
  return solutions;
}
