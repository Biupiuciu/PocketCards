from django.db import models

# Create your models here.
class User(models.Model):
    #id-primary key-hashed username email phone pwd 
    pwdHashed=models.CharField(max_length=100)
    username=models.CharField(max_length=25)
    email=models.CharField(max_length=25)
    phone=models.CharField(max_length=15)

    def __str__(self):
        return self.id
    
class Shop(models.Model):
    #id-primary shopname location phone pwd 
    name=models.CharField(max_length=125)
    address=models.TextField()
    latitude=models.DecimalField(max_digits=10, decimal_places=8) 
    longtitude=models.DecimalField(max_digits=10, decimal_places=8) 
    phone=models.CharField(max_length=15)
    logoPic=models.CharField(max_length=225)
    bgPic=models.CharField(max_length=225)

    def __str__(self):
        return self.id
    
class Promotion_Card(models.Model):
    #id name shop-foreign key number_of_goal_item startDate endDate desciption
    CARD_TYPES = ['points', 'stamp'] 
    name=models.CharField(max_length=50)
    shop=models.ForeignKey(Shop,on_delete=models.CASCADE)
    description=models.TextField()
    card_type = models.CharField(
        max_length=10,
        choices=[(t, t) for t in CARD_TYPES], 
    )
    goal_points=models.DecimalField(max_digits=10,decimal_places=2, blank=True, null=True)
    goal_stamp=models.IntegerField(blank=True, null=True)
    startDate=models.DateTimeField()
    endDate=models.DateTimeField()
    
    def __str__(self):
        #  return str({ 'promotionCardId': self.id, 'shop': self.shop.id })
        return str({ 'promotionCardId': self.id, 'shop': self.shop.id })

class LoyaltyCard(models.Model):
    #id shopid-foreignkey userId-foreignkey number_of_goal_item current_item(defualt=0) goal_achieved is_used
    promotionCard=models.ForeignKey(Promotion_Card,on_delete=models.CASCADE)
    user=models.ForeignKey(User,on_delete=models.CASCADE)
    goal_achieved=models.BooleanField()
    is_used=models.BooleanField()
    stamp=models.IntegerField(default=0,blank=True, null=True)
    points=models.DecimalField(max_digits=10,default=0,decimal_places=2, blank=True, null=True)
    
    
    def __str__(self):
        return str({'cardId': self.id,'promotionId': self.promotionCard.id, 'userId': self.userId})
    def getType(self):
        return self.promotionCard.card_type
    def getGoal(self):
        if self.promotionCard.card_type=='points':
            return self.promotionCard.goal_points
        elif self.promotionCard.card_type == 'stamp':
            return self.promotionCard.goal_stamp
        return None
    