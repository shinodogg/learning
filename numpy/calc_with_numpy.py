import numpy as np
import time

def calculate_time():
    a = np.random.randn(100000)
    b = [a]
    start_time = time.time()
    for _ in range(1000):
        np.sum(a)
    print("Using NumPy\t %f sec" % (time.time()-start_time))
    start_time = time.time()
    for _ in range(1000):
        sum(b)
    print("Not using NumPy\t %f sec" % (time.time()-start_time))

calculate_time()