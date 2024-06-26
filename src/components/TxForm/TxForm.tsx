import React, {useCallback, useState} from 'react';
import JsonView from 'react18-json-view';
import './style.scss';
import {SendTransactionRequest, useTonConnectUI, useTonWallet} from "@tonconnect/ui-react";

// In this example, we are using a predefined smart contract state initialization (`stateInit`)
// to interact with an "EchoContract". This contract is designed to send the value back to the sender,
// serving as a testing tool to prevent users from accidentally spending money.
const defaultTx: SendTransactionRequest = {
	// The transaction is valid for 10 minutes from now, in unix epoch seconds.
	validUntil: Math.floor(Date.now() / 1000) + 600,
	messages: [

		{
			// The receiver's address.
			address: 'EQCKWpx7cNMpvmcN5ObM5lLUZHZRFKqYA4xmw9jOry0ZsF9M',
			// Amount to send in nanoTON. For example, 0.005 TON is 5000000 nanoTON.
			amount: '5000000',
			// (optional) State initialization in boc base64 format.
			stateInit: 'te6cckEBBAEAOgACATQCAQAAART/APSkE/S88sgLAwBI0wHQ0wMBcbCRW+D6QDBwgBDIywVYzxYh+gLLagHPFsmAQPsAlxCarA==',
			// (optional) Payload in boc base64 format.
			payload: 'te6ccsEBAQEADAAMABQAAAAASGVsbG8hCaTc/g==',
		},

		// Uncomment the following message to send two messages in one transaction.
		/*
    {
      // Note: Funds sent to this address will not be returned back to the sender.
      address: 'UQAuz15H1ZHrZ_psVrAra7HealMIVeFq0wguqlmFno1f3B-m',
      amount: toNano('0.01').toString(),
    }
    */

	],
};

export function TxForm() {
	const [tx, setTx] = useState(defaultTx);
	const wallet = useTonWallet();
	const [tonConnectUi] = useTonConnectUI();

	const onChange = useCallback((value: object) => setTx((value as { updated_src: typeof defaultTx }).updated_src), []);

	return (
		<div className="send-tx-form">
			<h3>Configure and send transaction</h3>
			<JsonView src={defaultTx} theme="default" onEdit={onChange} onAdd={onChange} onDelete={onChange} />
			{wallet ? (
				<button onClick={() => tonConnectUi.sendTransaction(tx)}>
					Send transaction
				</button>
			) : (
				<button onClick={() => tonConnectUi.openModal()}>Connect wallet to send the transaction</button>
			)}
		</div>
	);
}






// import { SendTransactionRequest } from '@tonconnect/sdk';
// import { Button, Input, Typography } from 'antd';
// import cn from 'classnames';
// import React, { useCallback, useEffect, useRef, useState } from 'react';
// import JsonView from 'react18-json-view';
// import { useRecoilValueLoadable } from 'recoil';
// import { connector, sendTransaction } from '../../connector';
// import { useTonWallet } from '../../hooks/useTonWallet';
// import { generatePayload, getAddressAndStateInit, getRawAddress } from '../../nft-transaction';
// import { walletsListQuery } from '../../state/wallets-list';
// import { Address } from 'ton';
// import './style.scss';

// const { Title } = Typography;

// export function TxForm() {
// 	const [tx, setTx] = useState<SendTransactionRequest | null>(null);
// 	const [sendTo, setSendTo] = useState<string>('');
// 	const [addressError, setAddressError] = useState<boolean>(false);
// 	const wallet = useTonWallet();
// 	const walletsList = useRecoilValueLoadable(walletsListQuery);

// 	const removeTxMessage = useCallback(() => {
// 		if (tx && tx.messages.length === 2) {
// 			setTx(
// 				(value) =>
// 					({
// 						...value,
// 						messages: value!.messages.slice(1),
// 					} as SendTransactionRequest),
// 			);
// 		}
// 	}, [tx]);

// 	useEffect(() => {
// 		if (wallet) {
// 			const { address, stateInit } = getAddressAndStateInit(connector.wallet!.account.address);

// 			const tx = {
// 				validUntil: Date.now() + 1000000,
// 				messages: [
// 					{
// 						address,
// 						amount: '100000000',
// 						stateInit,
// 					},
// 				],
// 			};

// 			setTx(tx);
// 		} else {
// 			setTx(null);
// 			setSendTo('');
// 		}
// 	}, [wallet]);

// 	useEffect(() => {
// 		if (sendTo) {
// 			let isCorrect;
// 			try {
// 				Address.parseFriendly(sendTo);
// 				isCorrect = true;
// 			} catch (e) {
// 				isCorrect = false;
// 			}

// 			if (!isCorrect) {
// 				setAddressError(true);
// 				removeTxMessage();
// 				return;
// 			}

// 			setAddressError(false);
// 			const payload = generatePayload(sendTo);

// 			setTx(
// 				(value) =>
// 					({
// 						...value,
// 						messages: [...value!.messages].concat({
// 							address: value!.messages[0].address,
// 							amount: '50000000',
// 							payload,
// 						}),
// 					} as SendTransactionRequest),
// 			);
// 		} else {
// 			setAddressError(false);
// 			removeTxMessage();
// 		}
// 	}, [sendTo]);

// 	const onChange = useCallback(
// 		(value: object) => setTx((value as { updated_src: SendTransactionRequest }).updated_src),
// 		[],
// 	);

// 	return (
// 		<div className="send-tx-form">
// 			<Title level={3}>Configure and send transaction</Title>

// 			{wallet && tx ? (
// 				<>
// 					<Title level={4}>Create NFT and send to the friend</Title>
// 					<div className="send-tx-wrapper">
// 						<div className="send-tx-input-wrapper">
// 							(Optional) Send NFT to (user friendly address):
// 							<Input value={sendTo} onChange={(e) => setSendTo(e.target.value)}></Input>
// 							<span className={cn('send-tx-input-wrapper-error', { 'send-tx-input-wrapper-error_show': addressError })}>
// 								Wrong address
// 							</span>
// 						</div>
// 						<JsonView src={tx} theme="default" onEdit={onChange} onAdd={onChange} onDelete={onChange} />
// 						<Button
// 							type="primary"
// 							shape="round"
// 							disabled={addressError}
// 							onClick={() => sendTransaction(tx, walletsList.contents.walletsList[0])}
// 						>
// 							Send transaction
// 						</Button>
// 					</div>
// 				</>
// 			) : (
// 				<div className="send-tx-form__error">Connect wallet to send the transaction</div>
// 			)}
// 		</div>
// 	);
// }
