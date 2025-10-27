from django.db import models
from login.models import User

# Create your models here.
class Item(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    color = models.TextField()
    catagory = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return self.name


class Record(models.Model):
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    found_at = models.DateTimeField(auto_now_add=True)
    location = models.CharField(max_length=255)

    def __str__(self):
        return f"{self.user.username} found {self.item.name} at {self.found_at} in {self.location}"

class Claim(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.TextField()
    color = models.TextField()
    claimed_at = models.DateTimeField(auto_now_add=True)
    is_approved = models.BooleanField(default=False)

    match_item = models.ForeignKey(Item, on_delete=models.SET_NULL, null=True, blank=True)

    def __str__(self):
        return f"Lost item claim by {self.user.username} - Matched: {self.match_item is not None}"