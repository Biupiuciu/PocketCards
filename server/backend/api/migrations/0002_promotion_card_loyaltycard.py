# Generated by Django 5.1.3 on 2024-11-24 13:01

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Promotion_Card',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=50)),
                ('description', models.TextField()),
                ('card_type', models.CharField(choices=[('points', 'points'), ('stamp', 'stamp')], max_length=10)),
                ('goal_points', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('goal_stamp', models.IntegerField(blank=True, null=True)),
                ('startDate', models.DateTimeField()),
                ('endDate', models.DateTimeField()),
                ('shop', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.shop')),
            ],
        ),
        migrations.CreateModel(
            name='LoyaltyCard',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('goal_achieved', models.BooleanField()),
                ('is_used', models.BooleanField()),
                ('stamp', models.IntegerField(blank=True, default=0, null=True)),
                ('points', models.DecimalField(blank=True, decimal_places=2, default=0, max_digits=10, null=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.user')),
                ('promotionCard', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.promotion_card')),
            ],
        ),
    ]
