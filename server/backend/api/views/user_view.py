from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from ..models import User
from ..serializer import UserSerializer
from django.contrib.auth.hashers import make_password
from django.db import DatabaseError

@api_view(['PUT'])
def login(request):
    #req-user id + pwd
    #verify user's identity
    #create jwt
    #res-set cookie
    return Response()

@api_view(['GET'])
def logout(request):
    #delte cookie
    return Response()
    
@api_view(['POST','GET'])
def user_view(request):
    #for creating new user
    if request.method == 'POST':
        data = request.data.copy()

        if 'password' in data:
            data['pwdHashed'] = make_password(data.pop('password'))

        serializer=UserSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    #for returning login user's info
    #req- get id from request's cookie
    #res- user info except for pwd
    elif request.method == 'GET':
        return Response()
