from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import Shop
from ..serializer import ShopSerializer

# Create your views here.
