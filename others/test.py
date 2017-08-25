def delta(*args):
    if (len(args) != 1):
        for i in range(0, len(args)):
            if(type(args[i]) is list):
                delta(args[i])
            else:
                print("{0}".format(args[i]))
    else:
        for i in range(0, len(args[0])):
            if(type(args[0][i]) is list):
                delta(args[0][i])
            else:
                print("{0}".format(args[0][i]))

delta(0, [1, 2, [3, 4, [5, 6, 7, 8, [9, 10, ["x"]]]]])
