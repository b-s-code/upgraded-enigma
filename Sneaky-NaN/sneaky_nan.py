import struct

def conceal(val):
    """
    packs a one or two-character string into a 32-bit Nan
    """
    nan = float("nan")
    char1 = ord(val[0])
    char2 = ord(val[1]) if len(val) > 1 else 0
    return struct.unpack('!f', bytes([0b01111111, 0b11000000, char1, char2]))[0]

def extract(dirtynan):
    return ''.join([chr(int(b)) for b in struct.pack('!f', dirtynan)][2:])