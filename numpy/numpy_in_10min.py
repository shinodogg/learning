import numpy as np

a = np.array([1, 2, 3])

print(a * 3)
print(a + 2)

b = np.array([2, 2, 0])

print(a + b)

print(a * b)

print(np.dot(a,b))

print(np.arange(10))

print(np.arange(0, 10, 2))

print(np.linspace(0,10,15))

c = np.array([[1, 2, 3], [4, 5, 6]])

print(c)

print(c.shape)

d = np.array([[[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]],[[13,14,15],[16,17,18],[19,20,21],[22,23,24]]])

print(d)

print(d.shape)

print(np.sum(c))

print(np.sum(c, axis=1))

print(c.reshape(3,2))

print(c.reshape(6,1))

print(c.T)

print(np.transpose(c))

print(np.random.randn())

print(np.random.rand())

print(np.random.randn(2,3))

print(a)

print(a[0])

print(a[2])

a[1] = 3

print(a)

a[1] = 2

print(a)

print(c[0,0])

print(c[0,2])

print(c[1,2])

d = np.array([0, 5, 2, 7, 1, 9])

print(d[1:5])

print(d[1:3])

print(d[0:5:2])

print(d[::-1])

print(a + c)

print(a * c)