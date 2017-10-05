# Site geraldo.me

## Instalação inicial

```text
cd /var/www/geraldo.me/
git clone ssh://git@intmain.io:8322/Intmain/site-geraldo.me-deploy.git public_html
chown -R www-data.www-data /var/www/geraldo.me/
```

## Preparação do servidor

### Criação da chave ssh

```text
apt-get install sudo
sudo -u www-data ssh-keygen -t rsa
Generating public/private rsa key pair.
Enter file in which to save the key (/var/www/.ssh/id_rsa):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /var/www/.ssh/id_rsa.
Your public key has been saved in /var/www/.ssh/id_rsa.pub.
The key fingerprint is:
96:38:83:da:50:c4:6c:ee:a9:b3:3c:f1:ea:4e:fb:1e www-data@mail.intmain.io
The key's randomart image is:
+---[RSA 2048]----+
|   o.            |
|   .+            |
|   o.            |
|   ... . .       |
|  ....+ S        |
|  .+o  +         |
|  o+E            |
| o+...           |
| oBBo            |
+-----------------+
```

## Adicione a chave no gogs

## Acesso pela primeira vez

```text
sudo -u www-data git pull
The authenticity of host '[intmain.io]:8322 ([104.236.220.117]:8322)' can't be established.
ECDSA key fingerprint is 5b:59:c1:5c:cc:cc:d6:e4:8c:ef:89:58:c8:ae:97:4a.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '[intmain.io]:8322,[104.236.220.117]:8322' (ECDSA) to the list of known hosts.
remote: Counting objects: 3, done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 3 (delta 1), reused 0 (delta 0)
Unpacking objects: 100% (3/3), done.
From ssh://intmain.io:8322/Intmain/site-geraldo.me-deploy
   aa55214..5cbdae0  master     -> origin/master
Updating aa55214..5cbdae0
Fast-forward
 README.md | 28 ++++++++++++++++++++++++++++
 1 file changed, 28 insertions(+)
 
```