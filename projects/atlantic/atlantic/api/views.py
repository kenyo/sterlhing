from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

import json

from api.models import Customer

def home(request):
    return HttpResponse('Hello, World!')


@csrf_exempt
# create or update customer from webhook
def crupdate_customer(request):
  if request.method == 'POST':
    payload = json.loads(request.body)
    customer = payload['customer']

    # #     car = Car(name=car_name, top_speed=top_speed)
    # #     try:
    # #         car.save()
    response = json.dumps([{ 'Success': 'Car added successfully!'}])
    # #     except:
    # #         response = json.dumps([{ 'Error': 'Car could not be added!'}])
  return HttpResponse(response, content_type='text/json')
