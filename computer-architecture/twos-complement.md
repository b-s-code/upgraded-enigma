# Two's complement rep. of an integer

```math
\text{(so that I don't have to keep skimming throught long winded explanations on the internet)}
\\
\\
\underline{\textbf{Defn.}} \text{ Two's complement representation}
\\
\\
\text{The \textbf{signed decimal integer} represented by the two's complement bit vector  $\underline{x}$ is }
\\
\\
-x_{k - 1}2^{k - 1} + \sum_{i = 0}^{k - 2} x_i \cdot 2^i ,
\\
\\
\text{where } \underline{x} = [x_{k - 1}, x_{k - 2}, ..., x_0] \text{, i.e. } k = \text{bit vector length.}
```
