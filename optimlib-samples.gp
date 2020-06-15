# cpp-optimlib.md

reset
set term png
set grid
set samples 500

f(x) = x**2 - 5*x + 6
g(x) = 0.2 * sin(10*x)
h(x) = f(x) + g(x)

set output "img/optimlib_01.png"
plot [1:4][-0.5:2] f(x)

set output "img/optimlib_02.png"
set arrow from 2.3693,2 to 2.3693,-0.5 nohead lw 2 lc rgb 'red'
plot [1:4][-0.5:2] h(x)

# vim: ft=gnuplot
