# Site geraldo.me

## Instalação inicial

```
cd /var/www/geraldo.me/
git clone ssh://git@intmain.io:8322/Intmain/site-geraldo.me-deploy.git public_html
chown -R www-data.www-data /var/www/geraldo.me/
```

## Preparação do servidor

### Criação da chave ssh

```bash
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