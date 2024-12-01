from rest_framework import serializers
from .models import User,Shop,Promotion_Card,LoyaltyCard


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=User
        fields='__all__'
    
    # will run this when run .save() inside view
    # def create(self, validated_data):
        # remove password 
        # password=validated_data.pop(password)  
        # hash pwd
        # validated_data['pwdHashed']=make_password(password)
        # validated_data['pwdHashed']=make_password(validated_data['pwdHashed'])
        #run parent class's create function 
        # return super().create(validated_data)

class ShopSerializer(serializers.ModelSerializer):
    class Meta:
        model=Shop
        fields='__all__'

class Promotion_CardSerializer(serializers.ModelSerializer):
    shop=ShopSerializer

    class Meta:
        model=Promotion_Card
        fields='__all__'

class LoyaltyCardSerializer(serializers.ModelSerializer):
    shop=ShopSerializer
    user=UserSerializer
    
    class Meta:
        model=LoyaltyCard
        fields='__all__'