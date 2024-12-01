from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from ..models import Promotion_Card
from django.db import DatabaseError
from rest_framework import status


@api_view(['GET'])
def getAllPro(request):
    try:
        promotions=Promotion_Card.objects.select_related('shop').only('shop__id','shop__name','id','name').all()  #querySet
    
        data=[{"id":promotion.id,"name":promotion.name,"shopId":promotion.shop.id,"shopName":promotion.shop.name} for promotion in promotions]
        return Response(data,status=status.HTTP_200_OK)
    except DatabaseError as dbError:
        return Response ({"Error":"Database error occurred","details":str(dbError)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as Error:
        return Response ({"Error":"An unexpected error occurred","details":str(Error)},status=status.HTTP_500_INTERNAL_SERVER_ERROR)