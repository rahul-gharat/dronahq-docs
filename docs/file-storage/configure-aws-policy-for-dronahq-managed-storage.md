# Configure AWS policy for DronaHQ Managed Storage
:::info
This is useful for DronaHQ managed storage on DronaHQ self hosted version only.
:::

## Create IAM Access policy to access S3 bucket
 1. Open the AWS management console and navigate to the IAM Policy tab.
AWS Console > Identity and Access Management (IAM) > Policies
 2. Click on 'Create Policy' to add a new policy or you can choose any of your existing policies.
 3. Use sample policy json as provided below
 ```json
 {
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Statement1",
      "Effect": "Allow",
      "Action": [
        "s3:ListBucket",
        "s3:GetObject",
        "s3:PutObject",
        "s3:DeleteObject",
        "s3:GetObjectAcl",
        "s3:PutObjectAcl",
        "s3:GetBucketOwnershipControls",
        "s3:PutBucketOwnershipControls",
        "s3:PutBucketPublicAccessBlock"
      ],
      "Resource": [
        "arn:aws:s3:::<bucket-name>",
        "arn:aws:s3:::<bucket-name>/*"
      ]
    }
  ]
}

 ```

Note: replace `<bucket-name>` with your bucket name.

## Attach policy to resource

### Attach policy to IAM user to use with users credentials
1. Go to AWS Console > `Identity and Access Management (IAM)` > `Users`
2. Click on the user whose access key and secret key you are going to use.
3. Navigate to the `Permissions` > `Add Permissions` > `Attach policies directly`.
4. Search for the policy you created.
5. Review the changes and click `Add permissions` to attach the policy to the user.

### Attach policy to IAM Role to use it with EC2/ECS resource
1. Go to AWS Console > `Identity and Access Management (IAM)` > `Roles`
2. Click on 'Create Role' or you can choose from existing Roles
3. Select trusted entity `AWS Service` > Choose the AWS service for which the role will be used
4. On the `Attach Permission`, search and select the policy you want to attach
5. Review the role details, and provide a Role name and an optional description and save it.
6. Assign the Role to a Resource
    - For EC2 Instances:
        - Go to EC2 Dashboard > Select Instance > `Actions` > `Security` > `Modify IAM Role`.
        - select the role you want to attach and Click `Update IAM Role`.

## AWS permission description
| Action              | Description                                                                                     |
|---------------------|-------------------------------------------------------------------------------------------------|
| s3:ListBucket | Allows listing the contents (objects) of an S3 bucket. |
| s3:GetObject | Grants permission to retrieve objects from an S3 bucket. |
| s3:PutObject | Allows uploading or adding new objects to an S3 bucket. |
| s3:GetObjectAcl | Grants permission to retrieve the access control list (ACL) of an object to check if the object is public or private in file storage. |
| s3:DeleteObject | Allows deleting objects from an S3 bucket. |
| s3:GetBucketOwnershipControls | Allows retrieving the ownership control settings of a bucket (who owns the bucket, and any associated rules). This is required to check ACL is enabled or not. |
| s3:PutBucketOwnershipControls | Allows modifying or setting ownership controls for a bucket. This is required to enable ACL. |
| s3:PutObjectAcl | Allows changing the access control list (ACL) of an object (who can access the object). This is required to make the object public or private. |
| s3:PutBucketPublicAccessBlock | Grants permission to block public access at the bucket level to prevent public ACLs or policies. This is required to make Public access block setting to turn it off to make object public or private change reflect. |