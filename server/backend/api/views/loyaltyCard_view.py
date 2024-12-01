from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import LoyaltyCard
from ..serializer import LoyaltyCardSerializer
from ..models import Promotion_Card
from django.db import DatabaseError

@api_view(['GET'])
def user_cards(request,userId):
    #return user's all the cards 
    return Response()

@api_view(['PUT'])
def update_card(request,id):
    #update one certain card
    return Response()
    
@api_view(['POST','GET'])
def card_view(request,shopId,userId):
    if request=='POST':
        
        #create a new card
        return Response()
    if request=='GET':
        #return all the cards from one store
        return Response()

