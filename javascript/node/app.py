
import sys, json, numpy as np

def read_stdio():
    lines = sys.stdin.readlines()
    return json.loads(lines[0])

def main():
    lines = read_stdio()
    np_lines = np.array(lines)
    sum = np.sum(np_lines)
    print(sum)

if __name__ == '__main__':
    main()
    
