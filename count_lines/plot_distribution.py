import matplotlib.pyplot as plt

with open("cfiles.txt", "r") as f:
    clines = f.readlines()
with open("hfiles.txt", "r") as g:
    hlines = g.readlines()

# Need to pull out line numbers and throw away everything else.
# Last line of wc's output is not wanted here.
clineCounts = [l.split(".")[0].replace(" ", "") for l in clines[:-1]]
hlineCounts = [l.split(".")[0].replace(" ", "") for l in hlines[:-1]]

lineCounts = [int(x) for x in clineCounts + hlineCounts]
plt.hist(lineCounts)
plt.show()
