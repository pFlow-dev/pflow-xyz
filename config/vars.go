package config

var ( // set at build time w/ ldflags
	JsBuild  = `8aabd2d1` // update to match ./public/p/static/js/main.<JsBuild>.js
	CssBuild = `31cba778` // update to match ./public/p/static/css/main.<CssBuild>.css
)

const (
	Banner = `
        _____.__                                          
_______/ ____\  |   ______  _  __  ___  ______.__.________
\____ \   __\|  |  /  _ \ \/ \/ /  \  \/  <   |  |\___   /
|  |_> >  |  |  |_(  <_> )     /    >    < \___  | /    / 
|   __/|__|  |____/\____/ \/\_/ /\ /__/\_ \/ ____|/_____ \
|__|                            \/       \/\/           \/
`
)
