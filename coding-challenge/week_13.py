def optimize(x, y,learning_rate,iterations,parameters):
    size = x.shape[0]
    weight = parameters["weight"]
    bias = parameters["bias"]
for i in range(iterations):
        sigma = sigmoid(np.dot(x, weight) + bias)
        loss = -1/size * np.sum(y * np.log(sigma)) + (1 - y) * np.log(1-sigma)
        dW = 1/size * np.dot(x.T, (sigma - y))
        db = 1/size * np.sum(sigma - y)
        weight -= learning_rate * dW
        bias -= learning_rate * db

    parameters["weight"] = weight
    parameters["bias"] = bias
    return parameters
