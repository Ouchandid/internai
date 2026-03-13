from django.contrib.auth.models import AbstractUser
from django.db import models


class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('mentor', 'Mentor'),
        ('stagiaire', 'Stagiaire'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='stagiaire')
    phone = models.CharField(max_length=20, blank=True, null=True)

    def __str__(self):
        return self.username