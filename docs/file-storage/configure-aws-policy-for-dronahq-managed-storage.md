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

