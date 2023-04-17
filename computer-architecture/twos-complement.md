# Two's complement rep. of an integer

(so that I don't have to keep skimming through long winded explanations on the internet)

## Formal definition

The **signed decimal integer** represented by the two's complement bit vector  $\underline{x}$ is


$$
-x_{k - 1}2^{k - 1} + \sum_{i = 0}^{k - 2} x_i \cdot 2^i ,
$$

where $\underline{x} = [x_{k - 1}, x_{k - 2}, ..., x_0]$

i.e.  $k = \text{bit vector length}$.

## Plain English

Most significant bit is the negative of a big power of two.  Other bits are just regular powers of two.