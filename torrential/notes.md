# Before we start

1. Install the workshopper

    ```
    npm install -g torrential
    ```
    
    Or, to install locally...
    
    ```
    npm install torrential
    ```
    
    ```torrential.sh
    #!/usr/bin/env bash
    node ./node_modules/.bin/torrential $@
    ```

2. Install the `torrent` command line interface (CLI).      

    ```
    npm install -g torrent
    ```

# 00 install torrent

- Just install `torrent` globally (as shown above).
- Just run `torrential verify` to move on to step 1.

# 01 create a torrent file

To create a torrent:

```
torrent create xyz/ -o xyz.torrent
```

# 02 setup the tracker

```
npm install bittorrent-tracker -g
```

# 03 link the torrent to the tracker

To create a torrent file that uses a specific tracker.

```
torrent create xyz/ -o xyz-tracker.torrent --tracker http://localhost:8000/announce
```

# 04 start the tracker

```
bittorrent-tracker
```

# 05 seed and download the torrent

To seed the torrent:

```
torrent seed xyz-tracker.torrent
```

To download the torrent (from a different directory):

```
torrent xyz-tracker.torrent
```
