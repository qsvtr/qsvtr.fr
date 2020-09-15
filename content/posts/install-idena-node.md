+++
date = "2020-09-13"
title = "How to install an Idena node"
description = "how to install an Idena node and configure it"
images = ["/images/idena/idena_client.png"]
math = true
series = ["dev", "crypto"]
+++

*I consider that you have understood what [Idena](https://idena.io) is.*

*To continue the tutorial, you need a virtual machine under Linux or a server (VPS)*

# Configure your vps
+ Choose a vps (contabo, ovh, vultr, etc.), minimum requirements:
    * Linux/x64
    * 1 CPU core
    * 2 Gb RAM
    * 100 Gb HDD
    * 100 Mbps uplink
+ Establish tunnel connection (**required to connect the Idena client to your remote node EACH time**)
    * **Windows**:
        - install [PUTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
        - configure the tunnel {{< figure src="https://idena.io/images/tunnel.jpg" caption="" >}}
        - try to login into your vps with your credentials
    * **MacOS / Linux**:
        - open a terminal and type: `ssh -L 9999:localhost:9009 YOUR_VPS_IP`
+ (optional) [Secure your vps](#ideas-to-secure-your-vps)

# Quick way (faster)
we will use an open source tool: [idena-manager](https://gitlab.com/crackowich/idena-manager)
+ log into your vps 
+ (optional) create an Idena directory: `mkdir idena && cd idena`
+ `source <(curl -sL https://bit.ly/idena-manager-installer)`
+ `idena-manager add`
  - location: leave empty (or type your custom location)
  - api key: leave empty to generate an api key (or type a random sequence)
  - node wallet (or nodekey): find and copy paste your nodekey from your PC
    * Windows : `%userprofile%\AppData\Roaming\Idena\node\datadir\keystore`
    * MacOs : `~/Library/Application\ Support/Idena/node/datadir/keystore`
    * Linux : `~/.config/Idena/node/datadir/keystore/nodekey`
+ get your api.key: `idena-manager status`
{{< figure src="/images/idena/idena_api_key.png" caption="" >}}
+ paste it in your settings panel:
{{< figure src="/images/idena/idena_config.png" caption="" >}}
+ **you should be synchronized or in the process of being synchronized**

**useful commands**
+ to view status of your node: `idena-manager status`
+ to turn ON/OFF your node: `idena-manager [enable, disable]`
+ to update your node: `idena-manager node-update`

**author:** " I suggest for all of you to turn off self update on the script, if you have it (so there's no possibility of update in case someone hacks the git account). "

`idena-manager disable-self-update`

# Manual way
+ log into your vps 
+ (optional) create an Idena directory: `mkdir idena && cd idena`
+ `sudo apt update && sudo apt install wget screen -y`
+ copy the link of the node for Linux [here](https://github.com/idena-network/idena-go/releases)
{{< figure src="/images/idena/idena_copy_link_node.png" caption="" >}}
+ `wget YOUR_LINK`
{{< figure src="/images/idena/idena_node_downloaded.png" caption="the actual node version is 0.21.7" >}}
+ `chmod +x idena-node-linux-0.21.7` ⚠️ **change with your version** ⚠️
+ `./idena-node-linux-0.21.7`
+ `stop it with CTRl + C`
+ copy from your PC your nodekey:
    * Windows : `%userprofile%\AppData\Roaming\Idena\node\datadir\keystore`
    * MacOs : `~/Library/Application\ Support/Idena/node/datadir/keystore`
    * Linux : `~/.config/Idena/node/datadir/keystore/nodekey`
+ `echo YOUR_NODE_KEY > datadir/keystore/nodekey`
+ run your node: `screen ./idena-node-linux-0.21.7` and move it the background with CTRL A + D
+ copy your api key: `echo "$(cat datadir/api.key)"`
+ paste it in the settings panel:
{{< figure src="/images/idena/idena_config.png" caption="" >}}
+ **you should be synchronized or in the process of being synchronized**
    
# Ideas to secure your VPS
+ install a firewall
+ change SSH port
+ use keys identification instead of password

if you want to make a donation to supporte me: `0x480b82dfc93a4460b10213f142e1e8144d647a2b`

**You can contact me on Telegram or Twitter if you have any questions**
