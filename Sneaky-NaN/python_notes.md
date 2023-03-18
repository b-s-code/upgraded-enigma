# Exploit float spec to inject a 2 byte payload into a NaN

Really we could do 2 bytes, 1 nibble and 3 bits if we wanted.

## Problem

https://csprimer.com/watch/sneaky-nan/

## Notes

### **How to:** see the float belonging to a bit sequence

To see *which* float value is represented by a given manually-specified sequence of 4 bytes:

```
>>> import struct
>>> struct.unpack('!f', bytes([0b11111111, 0b11000000, 0b00000000, 0b00000000]))[0]
nan
>>> struct.unpack('!f', bytes([0b10001111, 0b11000000, 0b00000000, 0b00111100]))[0]
-1.8932752003270426e-29
```

Note that the above seems like it is Python's default NaN representation, but it appears to have some freely modifiable bits:

`*1111111 11****** ******** ********`

Interestingly, the constrained bits (the 1's above), don't line up perfectly with the bit positions of the exponent in the [IEEE 754 spec](https://en.wikipedia.org/wiki/Single-precision_floating-point_format).  This is because the same exponent-space bit pattern (eight 1s) is used to represent other special values too e.g. `-inf`.

### **How to:** see the bit sequence belonging to a float

```
>>> import struct
>>> [bin(b).ljust(8, '0') for b in struct.pack('!f', float('nan'))]
['0b1111111', '0b11000000', '0b000000', '0b000000']
>>> [bin(b).ljust(8, '0') for b in struct.pack('!f', -1.8932752003270426e-29)]
['0b10001111', '0b11000000', '0b000000', '0b111100']
```